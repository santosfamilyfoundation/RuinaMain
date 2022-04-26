import pandas as pd
import pyodbc
import csv
import sqlalchemy
import random
from datetime import datetime


dialect = 'mssql'
# driver = "{ODBC Driver 17 for SQL Server}"
driver = 'pyodbc'
server = "DESKTOP-DCBRNA3\SQLEXPRESS"
database_alc = "TribalTools?driver=ODBC+Driver+17+for+SQL+Server&authentication=ActiveDirectoryIntegrated"
database = "TribalTools"
user = "test_login"
password = "Zxcft^7890"
FILE_VEHICLE = './resources/lookups/vehicle.csv'
FILE_ROAD = './resources/lookups/road.csv'
excel = "./resources/master.xlsx"
excel_data = pd.read_excel(excel, sheet_name = None)
port = '1433'

# needs to be changed to the correct format
CRASH_ID = random.randint(0, 99999)

def lookup_table(file):
    # returns the lookup table for one table of the dbo
    reader = csv.reader(open(file, 'r'), delimiter = ';')
    lookup_table = {}
    for row in reader:
        # print(row)
        if row[1] != '':
            k, v = row
            lookup_table[k] = v
    return lookup_table


def create_output_df_vehicle(trct, my_data, lookup):
    result = []
    name = trct['name'].tolist()
    print(max(my_data['vehicle number']))
    for i in range(1, 1 + max(my_data['vehicle number'])):
        temp_df = my_data[my_data['vehicle number'] == i]
        questions = temp_df['question'].tolist()
        result_dict = {'question':[], 'answer':[]}

        print('vehicle number', i)
        for j in lookup:

            # check if my data row is in both my excel file and tcrt database
            if j in questions:
                if lookup[j] in name:
                    result_dict['question'].append( lookup[j] )
                    result_dict['answer'].append( my_data['answer'][questions.index(j)] )
        result.append(pd.DataFrame.from_dict(result_dict))
    print('result\n', result)
    return result


def create_output_df_road(trct, my_data, lookup):
    result = []
    name = trct['name'].tolist()
    result_dict = {'question':[], 'answer':[]}
    questions = my_data['question'].tolist()

    for j in lookup:

        # check if my data row is in both my excel file and tcrt database
        if j in questions:
            if lookup[j] in name:
                # need to add C3, C15, C20, C21, C22, C23, C24, C26, C27
                if lookup[j] == 'C3_Date':
                    result_dict['question'].append( lookup[j] )
                    result_dict['answer'].append( datetime.strptime(my_data['answer'][questions.index(j)],"%Y/%m/%d\t%H:%M"))
                    continue
                result_dict['question'].append( lookup[j] )
                result_dict['answer'].append( my_data['answer'][questions.index(j)] )
    result.append(pd.DataFrame.from_dict(result_dict))

    return result

def create_output_df_passenger(trct, my_data, lookup):
    pass

def create_output_df_nonmotorist(trct, my_data, lookup):
    pass

def create_output_df_driver(trct, my_data, lookup):
    pass

# creates an insert statement with a df
def insert_statement(df, table_name):
    key, value = '(','('

    for i in df['question'].tolist():
        key += "" + str(i) + ","
    for i in df['answer'].tolist():
        value += "'" + str(i) + "',"

    key += 'tblCrashID)'
    value += str(CRASH_ID) + ')'

    return "INSERT INTO "+ table_name +" " + key + " values" + value


def insert_vehicle(df):
    lookup_vehicle = lookup_table(FILE_VEHICLE)
    new_data_vehicle = create_output_df_vehicle(df, excel_data['vehicle'], lookup_vehicle)
    for i in new_data_vehicle:
        insert_vehicle = insert_statement(i, "dbo.tblVehicle")
        print('****************')
        print('insert_vehicle:\n', insert_vehicle)
        cursor.execute('SET ANSI_WARNINGS OFF')
        cursor.execute(insert_vehicle)

def insert_road(df):
    lookup_road = lookup_table(FILE_ROAD)
    new_data_road = create_output_df_road(df, excel_data['road'], lookup_road)
    for i in new_data_road:
        insert_road = insert_statement(i, "dbo.tblCrash")
        print('****************')
        print('insert_road:\n', insert_road)
        cursor.execute('SET ANSI_WARNINGS OFF')
        cursor.execute('SET IDENTITY_INSERT dbo.tblCrash ON')
        cursor.execute(insert_road)

def insert_passenger(trct, my_data, lookup):
    pass

def insert_nonmotorist(trct, my_data, lookup):
    pass

def insert_driver(trct, my_data, lookup):
    pass

if __name__ == "__main__":

    conn = pyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};SERVER='+server+
        ';PORT=1433'+
        ';DATABASE='+database+
        ';UID='+user+
        ';PWD='+ password)

    cursor = conn.cursor()

    vehicle = pd.read_sql('SELECT name FROM sys.columns WHERE object_id = OBJECT_ID(\'dbo.tblVehicle\') ', conn)
    insert_vehicle(vehicle)
    road = pd.read_sql('SELECT name FROM sys.columns WHERE object_id = OBJECT_ID(\'dbo.tblCrash\') ', conn)
    insert_road(road)

    conn.commit()
    cursor.close()

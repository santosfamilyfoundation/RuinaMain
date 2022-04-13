import cloudconvert
with open('./api_key.txt') as f:
    api_key = f.readlines()[0]

cloudconvert.configure(api_key = api_key, sandbox = False)

cloudconvert.Job.create(payload={
    "tasks": {
        'import-my-file': {
            'operation': 'import/url',
            'url': 'https://my-url'
        },
        'convert-my-file': {
            'operation': 'convert',
            'input': 'import-my-file',
            'output_format': 'pdf',
            'some_other_option': 'value'
        },
        'export-my-file': {
            'operation': 'export/url',
            'input': 'convert-my-file'
        }
    }
})

export default {
  ocr: {
    scanMode: 'AUTO',
    aleFile: 'assets/myVoucherAle.ale',
    tesseractLanguages: ['anyline_capitals'],
    traineddataFiles: ['trainedData/anyline_capitals.traineddata'],
    charWhitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    validationRegex: '[A-Z0-9]{8}$',
    isBrightTextOnDark: true,
  },
  license:
    'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiLCJKUyIsIldlYiJdLCJ2YWxpZCI6IjIwMjAtMDMtMjQiLCJtYWpvclZlcnNpb24iOjMsIm1heERheXNOb3RSZXBvcnRlZCI6NSwic2hvd1dhdGVybWFyayI6dHJ1ZSwicGluZ1JlcG9ydGluZyI6dHJ1ZSwiZGVidWdSZXBvcnRpbmciOiJvcHQtb3V0IiwidG9sZXJhbmNlRGF5cyI6NSwic2hvd1BvcFVwQWZ0ZXJFeHBpcnkiOnRydWUsImlvc0lkZW50aWZpZXIiOlsiY29tLlNhbnRvcy5SdWluYSJdLCJhbmRyb2lkSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sIndpbmRvd3NJZGVudGlmaWVyIjpbImNvbS5TYW50b3MuUnVpbmEiXSwid2ViSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sImpzSWRlbnRpZmllciI6WyJjb20uU2FudG9zLlJ1aW5hIl0sImltYWdlUmVwb3J0Q2FjaGluZyI6dHJ1ZX0KQW85NlhGbVhBdURyQTRRbEs2SFRzYW5CWmpYL1lNSnF6T0pIUjlyRW12Rnp5UDNOU25XMnU1ZFgwVXhuaEdHWWFDWEd0TUpJY1djT2hYUmlTVGNqRW9sYXlZVnlyb2dWVDlObExwdE9jN0pXK29aLzRnWnlscXdKaSt2Y2pZb2tUY3BzOE1mVjZDQ1lwVlFzc1pXNW15dy8wQlRkcnFHUnh4Rkt1OXJEaDBFM0dkM2x3OFN1MzlOdzBJZytBa0l3WEh6MVk4Q2FKem9haU53SUdnbXRFWGdxRWVFYmpxbE5oQkE5czg0WHJ0NUlYeDViNDB3bW1seTVrQmpQeGhzZjhFQlFHaHBZSUwzTlVJa0tnbjFxQVVSZ2FrTGtCcTNHbUJBZHFCTDJKaGZ5MWRSejY4YXliWUZmSktKd295ZXEyWnFmK1l0Mmx6UkdIcW1wODJ2S3d3PT0=',
  options: {
    camera: {
      captureResolution: '720',
    },
    flash: {
      mode: 'manual',
      alignment: 'bottom_left',
    },
    viewPlugin: {
      plugin: {
        id: 'VIN_ID',
        ocrPlugin: {
          vinConfig: {},
        },
      },
      cutoutConfig: {
        style: 'rect',
        width: 720,
        alignment: 'top_half',
        maxWidthPercent: '70%',
        ratioFromSize: {
          width: 62,
          height: 9,
        },
        strokeWidth: 1,
        strokeColor: 'FFFFFF',
        cornerRadius: 2,
        outerColor: '000000',
        outerAlpha: 0.3,
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        animation: 'traverse_multi',
        animationDuration: 250,
        style: 'contour_rect',
        strokeWidth: 2,
        strokeColor: '0099FF',
        beepOnResult: false,
        vibrateOnResult: true,
        blinkAnimationOnResult: true,
        cancelOnResult: true,
      },
      cancelOnResult: true,
      reportingEnabled: true,
    },
  },
};

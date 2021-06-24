# Google Cloud Functions examples
Code snippets and examples for Google Cloud Functions.


# ffmpeg example
Inspired by the Stack Overflow question: [Can you call out to FFMPEG in a Firebase Cloud Function?](https://stackoverflow.com/questions/42773497/can-you-call-out-to-ffmpeg-in-a-firebase-cloud-function)

The `ffmpeg` binary is included in the Cloud Functions environment. See [complete list of included system packages](https://cloud.google.com/functions/docs/reference/system-packages).

Two Cloud Functions examples in `ffmpeg/index.js`:
  - **ffmpegTest()** - Use the npm module `fluent-ffmpeg` to resize a video.
    This module provides a nice, easy to use wrapper over the ffmpeg command-
    line interface.
  - **ffmpegShellTest()** - invoke the `ffmpeg` binary directly to get info
    about a video file.

## Deploying the ffmpeg examples:
```bash
cd ffmpeg/
./deploy.sh
```

## Questions?
I'm Bret McGowen, drop me a line at [@BretMcG on Twitter](https://twitter.com/BretMcG) or my website [bretmcg.com](https://bretmcg.com).


## Credits
- Example video from [From the State Archives of North Carolina/Flickr](https://www.flickr.com/photos/north-carolina-state-archives/8643757322).

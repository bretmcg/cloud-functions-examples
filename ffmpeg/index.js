exports.ffmpegTest = (req, res) => {
  const ffmpeg = require('fluent-ffmpeg');

  let cmd = ffmpeg('example.mp4')
      .clone()
      .size('300x300')
      .save('/tmp/smaller-file.mp4')
      .on('end', () => {
        // Finished processing the video.
        console.log('Done');

        // E.g. return the resized video:
        res.sendFile('/tmp/smaller-file.mp4');
      });
};

exports.ffmpegShellTest = (req, res) => {
  const { exec } = require("child_process");
  exec("ffmpeg -i example.mp4", (error, stdout, stderr) => {
    //ffmpeg logs to stderr, but typically output is in stdout.
    if (stderr) {
      console.log(stderr);
      return res.send(stderr);
    }
    if (error) {
      console.error('error', error.message);
      return res.send(error.message);
    }
    console.log('stdout', stdout);
    res.send(stdout);
  });
};

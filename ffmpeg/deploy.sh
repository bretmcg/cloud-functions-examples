gcloud functions deploy ffmpegTest \
  --runtime=nodejs14 --trigger-http \
  --memory=1024MB --timeout=540 \
  --allow-unauthenticated

gcloud functions deploy ffmpegShellTest \
  --runtime=nodejs14 --trigger-http \
  --memory=1024MB --timeout=540 \
  --allow-unauthenticated

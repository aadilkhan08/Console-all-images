var imageUrls = [];
har.log.entries.forEach(function (entry) {
  // This step will filter out all URLs except images. If you just want e.g. just jpg's then check mimeType against "image/jpeg", etc.
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));
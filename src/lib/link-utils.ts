import toast from 'react-hot-toast'

export const handleCopyUrl = (url: string) => {
  navigator.clipboard.writeText(url)
  toast.success('Copied to clipboard')
}
export const handleDownloadQrCode = (url: string) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'Ayaoba-QR.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success('QR code downloaded')
    })
    .catch(error => {
      toast.error(error.message ?? 'Something went wrong')
    });
}

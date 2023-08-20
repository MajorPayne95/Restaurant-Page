export default function clearPage() {
    let body = document.getElementById('content')
    body.querySelectorAll('div').forEach(n => n.remove());
    body.querySelectorAll('footer').forEach(n => n.remove());
  }
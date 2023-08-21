export default function clearPage() {
    let body = document.getElementById('bodyDiv')
    body.querySelectorAll('div').forEach(n => n.remove()); 
    document.body.querySelectorAll('footer').forEach(n => n.remove());
  }
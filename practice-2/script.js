let divan = document.querySelector(".arr");

async function createTabl() {
  const res = await fetch("https://you-digital.ru/works/posts");
  obj = await res.json();
  let HTML =
    "<table border=0 width=100%><tr><td align=center>userId</td><td align=center>Id</td><td align=center>title</td><td align=center>body</td></tr>";
  for (i = 0; i < obj.length; i++) {
    console.log(obj[i].id);
    HTML += "<tr>";
    HTML += "<td align=center>" + `${obj[i].userId}` + "</td>";
    HTML += "<td align=center>" + `${obj[i].id}` + "</td>";
    HTML += "<td align=center>" + `${obj[i].title}` + "</td>";
    HTML += "<td align=center>" + `${obj[i].body}` + "</td>";
  }
  HTML += "</table>";
  divan.innerHTML = HTML;
}

createTabl();


// (c) 2021 KMDDR @ James Madonia
// Maulcat Records

// Feel free to clean this up

window.onload = () => {
  // Initialize and grab data from JSON
  // Init variables
  let r = GLOBAL_DATA.releases;
  let a = GLOBAL_DATA.artists;
  let p = GLOBAL_DATA.properties;
  let rn, an;
  let el = [], rc = p.loadSize, ac = p.loadSize;
  let ls = p.loadSize;
  // Show More Buttons
  artistbutton.onclick  = function() { ac += p.loadSize; console.log(ac); };
  // document.releasebutton.onclick = function() { rc += p.loadSize; console.log(rc); };
  // Database Code
  for ( let x = 0; x < ls && x < r.length; x++ ) el[x] = document.createElement("ARTICLE");
  for ( let i = 0; i < ls && i < r.length; i++ ) {
    // Looping thru an <article> element
    // This loop creates individual thumbnails
    let inner = [];
    // Create first element
      inner[0] = document.createElement("A");
      // Add attributes
      inner[0].classList.add("thumbnail");
      inner[0].href = `images/covers/${i}.jpg`;
      // Create image
      let img = document.createElement("IMG");
      img.src = `images/covers/${i}.jpg`;
      img.alt = a[r[i].id].name;
      // Append
      inner[0].appendChild(img);
    // Create second element (H2)
      inner[1] = document.createElement("H2");
      // Add attributes
      inner[1].classList.add("artistlink");
      if(r[i].link !== undefined) { 
        let link = "https://maulcat.bandcamp.com/album/" + r[i].link;
        inner[1].href = link;
      };
      inner[1].setAttribute('target', '_blank');
      inner[1].innerHTML = r[i].name;
    // Create last element (P)
      inner[2] = document.createElement("P");
      inner[2].setAttribute('target', '_blank');
      inner[2].classList.add("artistlink");
      inner[2].innerHTML = `${p.categories[r[i].cat]} by ${a[r[i].id].name}`;
    // Add elements to <article>
    for ( let j = 0; j < inner.length; j++ ) {
      el[i].appendChild(inner[j]); // Line 102
    }
    rn++; // Increment counter
  }
  // Append to HTML
  for ( let y = 0; y < inner.length; y++ ) {
    document.getElementById("thumbnails").appendChild(el[y]);
  }
  // Artists
  for ( let j = 0; j < ls && j < a.length; j++ ) {
    let element = document.createElement("A");
    (a[j.bc]) ? element.href = `https://${a[j].bc}.bandcamp.com` : "";
    element.innerHTML = a[j].name;
    // Append to section
    let sec = document.getElementById("inner");
    sec.appendChild(element);
    sec.appendChild(document.createElement("BR"));
    an++; // Increment counter
  };

}
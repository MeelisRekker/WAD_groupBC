// fetch('https://api.jsonbin.io/v3/b/6547c43254105e766fcbc89d') //Fetch from web
fetch('/JSON/users.json') //Fetch data from local JSON file
        .then((response) => response.json())
        .then(json => {
            let asd = json.record.users.length;
            console.log(asd);
            for (let i = 0; i < json.record.users.length; i++) {                
                let artikkel = document.createElement("article");
                //artikliPea algus (sisaldab: img ja p)
                let artikliPea = document.createElement("div");
                artikliPea.className = "artikliPea";            
                let avatar = document.createElement("img");
                if(json.record.users[i].gender === "male"){
                    avatar.src = 'images/meesAvatar.png';
                }else{
                    avatar.src = 'images/naineAvatar.png';
                }
                avatar.className = "avatarid";
                artikliPea.appendChild(avatar);
                let kuupaev = document.createElement("p");
                kuupaev.innerText = json.record.users[i].kuupaev;
                kuupaev.className = "postDate";
                artikliPea.append(kuupaev);
                artikkel.append(artikliPea);
                //artikliPea l6pp       
                //vaatame kas postitusel on pilt juures(kas JSON-is on tühi sõne?)
                if(json.record.users[i].pilt.length === 0){}
                else{
                    let pildiRuum = document.createElement("picture");
                    let pilt = document.createElement("img");
                    pilt.src = json.record.users[i].pilt;
                    pilt.className = "artikkelPilt";
                    pildiRuum.appendChild(pilt);
                    let piltText = document.createElement("p");
                    piltText.className = "pildiFooter";
                    piltText.innerText = json.record.users[i].piltText; 
                    pildiRuum.append(piltText);
                    artikkel.appendChild(pildiRuum);
                }
                //postituse sisu
                let postitus = document.createElement("p");
                postitus.innerText = json.record.users[i].postitus;                
                artikkel.appendChild(postitus);
                //postituse sisu l6pp
                //thumbs up, thumbs down algus
                let meeldivus = document.createElement("picture");
                let like = document.createElement("img");
                like.src = 'images/thumbsUP.png';
                like.id = 'meeldib';
                meeldivus.appendChild(like);
                artikkel.appendChild(meeldivus);
                //thumbs up, thumbs down l6pp      
                document.querySelector(".artikklid").appendChild(artikkel);
            }
        })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    })
    .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
    })

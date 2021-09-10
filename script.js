console.log("NewsApi Website script file");

newsSource = ['bbc-news','the-next-web','cnn','techcrunch','google-news'];
let RondomNews = Math.floor(0+(5-0)*Math.random());
console.log(RondomNews);
let source = newsSource[RondomNews];
let apiKey = '285a2961991d4593824f969a741b69a3';

let accordionExample = document.getElementById('accordionExample');


const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status == 200) {
        console.log(JSON.parse(this.responseText).articles);
        let obj = JSON.parse(this.responseText).articles;
        // let NewsName = obj.source;
        let pop = document.getElementById('accordionExample');
            NewsName = document.getElementById('NewsName').innerHTML=`Top News From <span class="badge bg-secondary">${obj[1].source["name"]}`;
            BN = document.getElementById('BN').innerHTML=`<div >
            <div class="ticker">
              <div class="title"><h5 class="fs-4">Breaking News</h5></div>
              <div class="news">
                <marquee>
                  <p class="fs-3 my-3">
                  1.${obj[1].title}
                  &nbsp;&nbsp;&nbsp; 2.${obj[2].title}
                  &nbsp;&nbsp;&nbsp; 3.${obj[3].title}
                </p>
                </marquee>

              </div>
            </div>
          </div>`
        str = "";
        for (key in obj) {
            str += `<div class="col-lg-3 ">
                    <div class="card my-3" style="width: 18rem;">
                    <img src="${obj[key].urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${obj[key].title}</h4>
                        <p class="card-text">${obj[key].content}</p>
                        <a href="${obj[key].url}" class="btn btn-primary" target="_blank">Read More</a>
                    </div>
                    </div></div>
          `;
          
            
        }
        pop.innerHTML = str;
    } else {

        console.error("some error occered");
    }
}

xhr.send();

let news = `<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
    aria-expanded="true" aria-controls="collapseOne">
    Accordion Item #1
  </button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
  data-bs-parent="#accordionExample">
  <div class="accordion-body">
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
    plugin adds the appropriate classes that we use to style each element. These classes control the overall
    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
    CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
    <code>.accordion-body</code>, though the transition does limit overflow.
  </div>
</div>
</div>`;


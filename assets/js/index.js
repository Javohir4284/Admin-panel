let booksData = books
let categoryData = category

function categoryFunction() {
    document.getElementById("categoryList").innerHTML = categoryData.map((item) => {
        return `<li id=${item.id}>${item.name.uz}</li>`
    })
    document.getElementById('slider').innerHTML = books['fiction'].map(item => {
        return `<div class="slide">
        <div class="slide-avatar">
          <img src=${item.image} />
        </div>
        <div class="slide-info">
          <h5>${item.name}</h5>
          <div class="slide-name">
            <p>${item.author?item.author:""}</p>
          </div>
          <hr />
        </div>
      </div>`
    })
    categoryData.forEach(item => {
        document.getElementById(item.id).addEventListener("click", (e) => {
            let book = books[e.target.id]
            document.getElementById('slider').innerHTML = book.map(item => {
                return `<div class="slide" id=${item.href}>
                <div class="slide-avatar">
                  <img src=${item.image} />
                </div>
                <div class="slide-info">
                  <h5>${item.name}</h5>
                  <div class="slide-name">
                    <p>${item.author?item.author:""}</p>
                  </div>
                  <hr />
                </div>
              </div>`
            })
        })
    })
}

categoryFunction()
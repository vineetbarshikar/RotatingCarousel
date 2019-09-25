class Carousel {
    constructor(container, data) {
        this.validate(container, data);
        this.container = container;
        this.containerElem = document.querySelector(container);
        this.data = data;
        this.init();
    }

    validate(container, data) {
        if (!container) {
            throw new Error("Container elemenet not provided");
        }

        const cont = document.querySelector(container);
        if (!cont) {
            throw new Error("Container element not found on DOM");
        }

        if (!data || !data instanceof Array || !data.length) {
            throw new Error("Data not provided or not in correct format");
        }
    }

    init() {
        this.containerElem.classList.add("carousel-container");

        const prev = this._createElement("button", "carousel-prev", "<");
        const next = this._createElement("button", "carousel-next", ">");
        const ul = this._createElement("ul", "carousel-ul");

        for (let i = 0;i < this.data.length;i++) {
            let d = this.data[i];
            const li = this._createElement("li", "carousel-li");
            const img = this._createElement("img", "carousel-img");
            img.src = d;
            li.style.order = i;
            li.appendChild(img);
            ul.appendChild(li);
        }

        prev.addEventListener("click", this.prevClickHandler);
        next.addEventListener("click", this.nextClickHandler);

        this.containerElem.appendChild(prev);
        this.containerElem.appendChild(ul);
        this.containerElem.appendChild(next);
    }

    nextClickHandler(event) {
        const lis = document.querySelectorAll(".carousel-li");
        lis.forEach(li => {
            if (li.style.order > 0) li.style.order--;
            else li.style.order = lis.length-1;
        });
    }

    prevClickHandler(event) {
        const lis = document.querySelectorAll(".carousel-li");
        lis.forEach(li => {
            if (li.style.order < lis.length - 1) li.style.order++;
            else li.style.order = 0;
        });
    }

    _createElement(type, className, textContent = "") {
        const elem = document.createElement(type);
        elem.classList.add(className);
        if (textContent) elem.innerText = textContent;
        return elem;
    }
}

module.exports = Carousel;
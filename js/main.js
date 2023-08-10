class ProjectCards extends HTMLElement {
    connectedCallback() {
        let featuredProjects = ''
        let i = 1
        while (this.hasAttribute(`title-${i}`)) {
            const title = this.getAttribute(`title-${i}`)
            const imgAlt = this.getAttribute(`img-alt-${i}`)
            const imgPath = this.getAttribute(`img-path-${i}`)
            const modalId = this.getAttribute(`modal-id-${i}`)
            featuredProjects +=`
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card">
                        <img
                            alt="${imgAlt}"
                            class="card-img-top"
                            src="${imgPath}"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <button
                            class="btn btn-primary"
                            data-target="#${modalId}"
                            data-toggle="modal"
                            type="button"
                            >
                            Learn More
                            </button>
                        </div>
                    </div>
                </div>
            `;
            i++;
        }
        this.innerHTML = `
            <div class="container">
                <h2 class="text-center mb-4">Featured Projects</h2>
                <div class="row">
                    ${featuredProjects}
                </div>
            </div>
        `;
    }
}

customElements.define('project-cards', ProjectCards)


class ProjectModal extends HTMLElement {
    connectedCallback() {
        let footerLinks = '';
        let i = 1;

        while (this.hasAttribute(`footer-text-${i}`) && this.hasAttribute(`footer-link-${i}`)) {
            const linkClass = this.getAttribute(`footer-class-${i}`) || 'btn btn-primary';
            const linkText = this.getAttribute(`footer-text-${i}`);
            const linkHref = this.getAttribute(`footer-link-${i}`);
            footerLinks += `
                <a class="${linkClass}" target="_blank" href="${linkHref}">
                    ${linkText}
                </a>
            `;
            i++;
        }
        this.innerHTML = `
            <div class="modal fade" id="${this.getAttribute('modal-id')}" role="dialog">
                <div class="modal-dialog modal-lg mx-auto" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${this.getAttribute('title')}</h5>
                            <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                                <span aria-hidden="true"> × </span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>${this.getAttribute('body')}</p>
                        </div>
                        <div class="modal-footer">
                            ${footerLinks}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('project-modal', ProjectModal);


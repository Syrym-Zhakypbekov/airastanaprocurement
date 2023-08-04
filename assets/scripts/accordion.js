document.addEventListener('DOMContentLoaded', (event) => {
    const accordions = document.querySelectorAll('.accordion-expanded');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', event => {
            const accordionHeaderClicked = event.target.closest('.accordion-expanded-frame203');
            if (!accordionHeaderClicked) return;

            const dataIndex = accordionHeaderClicked.getAttribute('data-index');

            const content = document.querySelector(`.accordion-expanded-frame204[data-index='${dataIndex}']`);
            const chevronDown = document.querySelector(`.accordion-item-chevron-small-down[data-index='${dataIndex}']`);
            const chevronUp = document.querySelector(`.accordion-expanded-frame203-icon-chevron-small-up[data-index='${dataIndex}']`);
            const frame203 = document.querySelector(`.accordion-expanded-frame203[data-index='${dataIndex}']`);

            if (content.style.display === 'none' || !content.style.display) {
                content.style.display = 'flex';
                chevronDown.style.display = 'none';
                chevronUp.style.display = 'block';
                frame203.style.background = 'var(--shades-white, #FFF)';
            } else {
                content.style.display = 'none';
                chevronDown.style.display = 'block';
                chevronUp.style.display = 'none';
                frame203.style.background = 'var(--shades-ink-50, #F6F7F9)';
            }
        });
    });
});

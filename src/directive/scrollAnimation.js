const observer = new IntersectionObserver(
    (entries,observer) => {
        entries.forEach(entry=> {
            // if(entry.isIntersecting) {
                if(entry.intersectionRatio > 0) {
                entry.target.classList.add('enter')
                observer.unobserve(entry.target)
            }
           
        })
    } 
    );
export default {
     bind(el) {
        el.classList.add('before-enter')
        observer.observe(el)
    }
}

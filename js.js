const spans = document.querySelectorAll('.selectable-span');
const result = document.querySelector('.result-span');
const rating = document.querySelector('.rating');
const thank = document.querySelector('.thank');

spans.forEach(function(span) {
    span.addEventListener('click', function() {
        spans.forEach(function(s) {
            s.classList.remove('selected');
        })
        this.classList.add('selected');

        result.innerHTML = this.innerHTML;
    });
    span.addEventListener('touchstart', function() {
        spans.forEach(function(s) {
            s.classList.remove('selected');
        })
        this.classList.add('selected');

        result.innerHTML = this.innerHTML;
    });
});

document.getElementById('submit').addEventListener('click', function() {
    rating.classList.add('visible');
    thank.classList.remove('visible');
});
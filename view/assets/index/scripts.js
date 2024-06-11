function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var content = section.querySelector('ul');
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
}
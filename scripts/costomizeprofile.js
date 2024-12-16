const customizeContainer = document.getElementById("customizeProfile");
const confirmCustomization = document.getElementById("confirmCustomization")
const firstColorChange = document.getElementById("firstColor")
const secondColorChange = document.getElementById("secondColor")

customizeContainer.addEventListener('click', () => {
    document.getElementById('profile-customization-container').style.display='flex';
});

confirmCustomization.addEventListener('click', () => {
    document.getElementById('profile-customization-container').style.display='none';
});

firstColorChange.addEventListener('click', () =>{
    document.getElementById('backgroundProfile').style.background='linear-gradient(45deg, #0B2187,#80630E)';
});

secondColorChange.addEventListener('click', () =>{
    document.getElementById('backgroundProfile').style.background='linear-gradient(45deg, #198C6E,#851F01)';
});
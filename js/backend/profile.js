import { saveProfile } from './firebase.js';

const profileUser = document.getElementById('infoProfileForm');
profileUser.addEventListener('submit', (e) => {
    e.preventDefault();

    const neckName = profileUser['nicknameProfile'].value;
    const favorite = [profileUser['womanFavorite'].value, profileUser['menFavorite'].value, profileUser['trendyFavorite'].value];
    const clothes = [profileUser['forMeClothes'].value, profileUser['forBAEClothes'].value, profileUser['forParentsClothes'].value];
    const styles = [profileUser['basicStyle'].value, profileUser['casualStyle'].value, profileUser['elegantStyle'].value];
    
    saveProfile(neckName, favorite, clothes, styles);
    location.href = "index.html";
})

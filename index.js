let nomeCampeao = "Veiga";
let nivelCampeao = 1001;
let eloCampeao;

switch (true) {
    case (nivelCampeao >= 500 && nivelCampeao <= 1000):
        eloCampeao = "Ferro";
        break;
    case (nivelCampeao >= 1001 && nivelCampeao <= 2000):
        eloCampeao = "Bronze";
        break;
    case (nivelCampeao >= 2001 && nivelCampeao <= 3000):
        eloCampeao = "Prata";
        break;
    case (nivelCampeao >= 3001 && nivelCampeao <= 4000):
        eloCampeao = "Ouro";
        break;
    case (nivelCampeao >= 4001 && nivelCampeao <= 5000):
        eloCampeao = "Platina";
        break;
    case (nivelCampeao >= 5001 && nivelCampeao <= 6000):
        eloCampeao = "Ascendente";
        break;
    case (nivelCampeao >= 7001 && nivelCampeao <= 9000):
        eloCampeao = "Imortal";
        break;
    case (nivelCampeao >= 10000):
        eloCampeao = "Radiante";
        break;
    default:
        eloCampeao = "Elo não encontrado";
        break;
};


console.log(`Seu campeão ${nomeCampeao} esta no Elo ${eloCampeao}`);

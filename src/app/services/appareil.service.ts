export class AppareilService {
    appareils = [
        {
          name: 'Téléphone',
          status: 'allumé'
        },
        {
          name: 'Machine à pain',
          status: 'éteint'
        },
        {
          name: 'Robot de cuisine',
          status: 'allumé'
        }
      ];

    switchOnAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'allumé'
        }
    }

    switchOffAll() {
        for(let appareil of this.appareils) {
            appareil.status = 'éteint'
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé'
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint'
    }
}
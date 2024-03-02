const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName) {
    function searchCompany(company) {
        if (company.name === companyName) {
            return company;
        }
        if (company.clients) {
            for (let client of company.clients) {
                const foundCompany = searchCompany(client);
                if (foundCompany) {
                    return foundCompany;
                }
            }
        }
        if (company.partners) {
            for (let partner of company.partners) {
                const foundCompany = searchCompany(partner);
                if (foundCompany) {
                    return foundCompany;
                }
            }
        }
        return null;
    }

    return searchCompany(company);
}

const companyName = 'Клієнт 1';
const foundCompany = findValueByKey(companyName);
if (foundCompany) {
    console.log('Знайдена компанія:', foundCompany);
} else {
    console.log('Компанія не знайдена');
}
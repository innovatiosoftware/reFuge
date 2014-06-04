angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Friends', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Scruff McGruff' },
            { id: 1, name: 'G.I. Joe' },
            { id: 2, name: 'Miss Frizzle' },
            { id: 3, name: 'Ash Ketchum' }
        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        }
    })

    .factory('Refuges', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var refuges = [
            { id: 1, name: 'Rafael Esparra Cartagena', capacity: 30, municipio: 'Salinas', telephone: '824-5568' },
            { id: 2, name: 'Luis Munoz Rivera', capacity: 100, municipio: 'San Lorenzo', telephone: '736-5856' },
            { id: 3, name: 'Francisco Rivera Claudio', capacity: 137, municipio: 'Morovis', telephone: '862-8217' },
            { id: 4, name: 'Gustavo A Becquer', capacity: 286, municipio: 'San Juan', telephone: '764-4260' },
            { id: 5, name: 'Ana Roque De Duprey', capacity: 120, municipio: 'San Juan', telephone: '782-7002' },
            { id: 6, name: 'Las Ochentas', capacity: 37, municipio: 'San Lorenzo', telephone: '824-4717' }
        ];

        return {
            all: function () {
                return refuges;
            },
            get: function (refugeId) {
                // Simple index lookup
                i = refugeId - 1;
                return refuges[i];
            }
        }
    });

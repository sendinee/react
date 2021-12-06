const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    //127.0.0.0 sont considérés comme localhost pour IPv4
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;

            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);


                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'Cette application web est servie en cache-d’abord par un service ' +
                        'Pour en savoir plus, visitez https://github.com/sendinee'
                    );
                });
            } else {
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {

                            console.log(
                                'Le nouveau contenu est disponible et sera utilisé lorsque tout ' +
                                'Les onglets de cette page sont fermés.'
                            );


                            if (config && config.onUpdate) {
                                config.onUpdate(registration);
                            }
                        } else {

                            console.log('Le contenu est mis en cache pour une utilisation hors ligne.');


                            if (config && config.onSuccess) {
                                config.onSuccess(registration);
                            }
                        }
                    }
                };
            };
        })
        .catch(error => {
            console.error('Erreur lors de l’enregistrement :', error);
        });
}

function checkValidServiceWorker(swUrl, config) {

    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then(response => {

            const contentType = response.headers.get('content-type');
            if (
                response.status === 404 ||
                (contentType != null && contentType.indexOf('javascript') === -1)
            ) {

                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {

                registerValidSW(swUrl, config);
            }
        })
        .catch(() => {
            console.log(
                'Aucune connexion Internet trouvée. L’application fonctionne en mode hors ligne.'
            );
        });
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(registration => {
                registration.unregister();
            })
            .catch(error => {
                console.error(error.message);
            });
    }
}

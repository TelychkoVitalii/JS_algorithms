import React from 'react';

// Notes:
// Be careful when using Render Props with React.PureComponent
// The prop value will be different on each render.

class Storage extends React.Component {
    state = {
        localStorageAvailable: false,
    };

    componentDidMount() {
        this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
        const testKey = 'test';

        try {
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            this.setState({ localStorageAvailable: true });
        } catch(e) {
            this.setState({ localStorageAvailable: false });
        }
    }

    load = (key) => {
        if (this.state.localStorageAvailable) {
            return localStorage.getItem(key);
        }

        return null;
    };

    save = (key, data) => {
        if (this.state.localStorageAvailable) {
            localStorage.setItem(key, data);
        }
    };

    remove = (key) => {
        if (this.state.localStorageAvailable) {
            localStorage.removeItem(key);
        }
    };

    render() {
        return (
            <span>
                {this.props.render({
                    load: this.load,
                    save: this.save,
                    remove: this.remove,
            })}
        </span>
        );
    }
}

class ComponentNeedingStorage extends React.Component {
    state = {
        username: '',
        favoriteMovie: '',
        isFetching: false,
    };

    fetchData = (save) => {
        this.setState({ isFetching: true });

        // this.props.reallyLongApiCall()
        //     .then((user) => {
        //         save('username', user.username);
        //         save('favoriteMovie', user.favoriteMovie);
        //
        //         this.setState({
        //             username: user.username,
        //             favoriteMovie: user.favoriteMovie,
        //             isFetching: false,
        //         });
        //     });
    };

    render() {
        return (
            <Storage render={({ load, save, remove }) => {
                    const username = load('username') || this.state.username;
                    const favoriteMovie = load('favoriteMovie') || this.state.username;

                    if (!username || !favoriteMovie) {
                        if (!this.state.isFetching) {
                            this.fetchData(save);
                        }

                        return <div>Loading...</div>;
                    }

                    return (
                        <div>
                            My username is {username}, and I love to watch {favoriteMovie}.
                        </div>
                    );
                }}
            />
        )
    }
}

export default ComponentNeedingStorage;
import React, { Component } from 'react';

// Issues:
// 1. ES6 classes: Worked with ES6 class (good)
// 2. Indirection: where state is come from if we have several hoc's (bad)
// 3. Name collisions: Two HOCs that try to use the same prop name will collide and overwrite one another (bad)

const withStorage = WrappedComponent => {
    return class extends Component {
        state = {
          localStorageAvailable: false
        };

        componentDidMount() {
          this.checkLocalStorageExist();
        }

        checkLocalStorageExist() {
          const testKey = 'test';
          try {
            localStorage.setItem(testKey, testKey);
            localStorage.removeItem(testKey);
            this.setState({localStorageAvailable: true})
          } catch (e) {
            this.setState({localStorageAvailable: false})
          }
        }

        load = key => {
          this.state.localStorageAvailable && localStorage.getItem(key);
          return null;
        };
        save = (key, data) => this.state.localStorageAvailable && localStorage.setItem(key, data);
        remove = key => this.state.localStorageAvailable && localStorage.removeItem(key);

        render() {
            return (
                <WrappedComponent
                    load={this.load}
                    save={this.save}
                    remove={this.remove}
                />
            )
        }
    }
};

// export default withStorage;

class ComponentNeedingStorage extends Component {
    state = {
        username: '',
        favoriteMovie: ''
    };

    componentDidMount() {
        const { load, save, reallyLongApiCall } = this.props,
              username = load('username'),
              favoriteMovie = load('favoriteMovie');
        if (!username || !favoriteMovie) {
            reallyLongApiCall()
                .then((user) => {
                    save('username', user.username) || '';
                    save('favoriteMovie', user.favoriteMovie) || '';
                    this.setState({
                        username: 'Bob',
                        favoriteMovie: 'Titanic',
                    });
                });
        } else {
            this.setState({ username, favoriteMovie })
        }
    }

    render() {
        const { username, favoriteMovie} = this.state;
        (!username || !favoriteMovie) && <div>Loading...</div>
        return (
            <div>
                My username is {username}, and I love to watch {favoriteMovie}
            </div>
        )
    }
}

export default withStorage(ComponentNeedingStorage);
import React from 'react';
import cn from 'classnames';
import Button from './Button';

class BtnGroup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        mounted: false,
      };
    }
  
    handleClick = () => {
        this.setState((state) => {
            return {
                active: !state.active,
                mounted: true,
            }  
        });
    };
  
    render() {
      const { active, mounted } = this.state;
      const btnLeft = cn('btn', 'btn-secondary', 'left', {
        active: mounted && active
      })
      const btnRight = cn('btn', 'btn-secondary', 'right', {
        active: mounted && !active
      })
      return (
        <div className="btn-group" role="group">
          <Button
            className={btnLeft}
            onClick={this.handleClick}
          >
            Left
          </Button>
          <Button
            className={btnRight}
            onClick={this.handleClick}
          >
            Right
          </Button>
        </div>
      );
    }
  }

export default BtnGroup;

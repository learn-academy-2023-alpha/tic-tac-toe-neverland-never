import React, {useEffect} from 'react'

const Timer = ({dummy}) => {
      // Create a timer effect
      useEffect(() => {
            const timer = setTimeout(() => {
                  alert('Are you still playing?')
            }, 30000);
            return () => clearTimeout(timer);
          }, [{dummy}]);

      return (<></>)
}

export default Timer
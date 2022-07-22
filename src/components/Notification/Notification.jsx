      import PropTypes from "prop-types"
      export const Notification = ({message}) =><p>{message}</p>

      
      Notification.propTypes = {
          title: PropTypes.string
      }
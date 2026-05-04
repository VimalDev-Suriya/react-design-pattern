# Higher Order Components and Functions:

**Higher order functions (HOF)** - a function that takes a function as the arguments or return the new function or do both are called as HOF. <br>
**Higher Order Components (HOC)** - A component, that accepts anothe component as the argument and return the enhanced version of given component.

- It is one of the Advanced Design pattern

**Note:**

- We will use "with" prefix for all type of HOC like `withAuth`, `withAnalytics`
- It accepts the components and return the enhanced component.

### Examples:

```js
// withPermission.js
import React from 'react';

const withPermission = (requiredRole) => (WrappedComponent) => {
  // * In this space we cannot do hooks implemenattation as this is not a React component

  return function PermissionComponent(props) {
    // Mock user data usually retrieved from a Store/Context
    const user = { role: 'guest' };

    if (user.role !== requiredRole) {
      return (
        <div className="error-notice">
          You do not have permission to view this section.
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

// Usage: Only admins can see the Delete button logic
const DeleteUserButton = () => <button>Delete User</button>;
export default withPermission('admin')(DeleteUserButton);
```

```js
// withAnalytics.js
import React, { useEffect } from 'react';

const withAnalytics = (pageName) => (WrappedComponent) => {
  return function AnalyticsComponent(props) {
    useEffect(() => {
      // Real-world: window.gtag('event', 'page_view', { page_title: pageName });
      console.log(`[Analytics] User visited: ${pageName}`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Usage: Automatically logs 'Profile Page' when the component is shown
const UserProfile = () => <div>User Details Here</div>;
export default withAnalytics('Profile Page')(UserProfile);
```

### Pros

- We can minimize the repetation of the code (Code Re-usability)
- Separation of Concerns' as Presentational Components present the UI , as the HOC will take care of business logic

### Cons:

- Difficult to debug using the devtools
- When the logic gets complicated, like a HOF returs another HOF
- Wrapper Hell

### Fixes:

- Custom Hooks

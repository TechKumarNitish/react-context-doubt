# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
## **Scripts**

| **Script**         | **Description**                          |
|---------------------|------------------------------------------|
| `npm run dev`       | Start the development server             |
| `npm run build`     | Create a production build                |
| `npm run preview`   | Preview the production build locally     |
| `npm install`       | Install project dependencies             |


## issue

`
I created a small React project containing two pages, home and login, to show the toggling between light and dark mode by creating a theme react-context for this. Inside the homepage is a button for toggling the theme, the `initial mode is light. When I click on the button on the home page, the home goes into dark mode, But when I go to the login page it's still in light mode. Also when I come back to the home page, the home page becomes in its initial mode which is light, not retaining the previous mode which is dark. Why is the react context behaving so weirdly? However, I have correctly used the context's consumer component in the right place. can I get any solution for the above issue?
`

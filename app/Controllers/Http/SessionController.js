class SessionController {
  login({view}) {
    return view.render('session.create');
  }
}

module.exports = SessionController;

var Body = React.createClass ({
  getInitialState() {
    return { skills: [] }
  },

  handleSubmit(skill) {
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  render () {
    return (
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills} />
      </div>
    )
  }
});

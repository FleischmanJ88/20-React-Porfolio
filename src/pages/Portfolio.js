import Project from '../components/Project';

import Horiseon from '../images/1.png';
import Quiz from '../images/2.png';
import Calendar from '../images/3.png';
import Tracker from '../images/4.png';
import Weather from '../images/5.png';

export default function Portfolio () {
  const projects = [
    {
      name: 'Horiseon Refactor',
      subtitle: 'Refactoring a website',
      url: 'https://github.com/FleischmanJ88/01-Horiseon-Refactor',
      image: Horiseon
    },
    {
      name: 'Quiz Generator',
      subtitle: 'Generate a quiz with timed questions',
      url: 'https://github.com/FleischmanJ88/04-Quiz-Generator',
      image: Quiz
    },
    {
      name: 'Interactive Calendar',
      subtitle: 'Create your own calendar',
      url: 'https://github.com/FleischmanJ88/05-Interactive-Calendar',
      image: Calendar
    },
    {
      name: 'Team Tracker',
      subtitle: 'Track your teammates status',
      url: 'https://github.com/FleischmanJ88/10-Team-Tracker',
      image: Tracker
    },
    {
      name: 'Weather Tracker',
      subtitle: 'Find the weather',
      url: 'https://github.com/FleischmanJ88/06-TellMeTheWeather',
      image: Weather
    }

  ]
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <Project key={project.name}
          project={project}
        />
      ))}
    </div>
  )
}
import { render, screen, findByText, findByAltText } from '@testing-library/react';
import App from '../../App';


const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
render(
<App />
)

const userName = await screen.findByText('Vonta')

expect(userName).toBeInTheDocument()

const avatar = await screen.findByAltText('avatar')
expect(avatar).toHaveClass('object-fill')

const header= screen.getByRole('banner')
expect(header).toBeInTheDocument()
})

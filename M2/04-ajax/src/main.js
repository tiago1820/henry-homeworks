window.BASEURL = 'http://localhost:5000';

import {showFriends} from './functions/show.js';
import { searchFriend } from './functions/search.js';
import { deleteFriend } from './functions/delete.js';

$('#boton').click(showFriends)
$('#search').click(searchFriend);
$('#delete').click(deleteFriend);
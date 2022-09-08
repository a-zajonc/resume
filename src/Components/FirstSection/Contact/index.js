import { Box, Text, List, ListItem, Link } from '@chakra-ui/react';
import { faPhone, faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { SectionHeader } from '../Styling';


export function Contact({ title }) {

    function contactDisplay(icon, information) {
        return <ListItem display="flex" alignItems="center">
            <FontAwesomeIcon icon={icon} color="white" width="16px" height="16px" />
            <Text fontFamily="Montserrat" color="white" pl="10">
                {information}
            </Text>
        </ListItem>
    }

    return <Box>
        <SectionHeader title={title} />
        <List pb="10" >
            {contactDisplay((faPhone), ("668 954 072"))}
            <Link href="https://github.com/a-zajonc">{contactDisplay((faGithub), ("https://github.com/a-zajonc"))}</Link>
            {contactDisplay((faEnvelope), ("slaboszadriana@gmail.com"))}
            {contactDisplay((faLocationPin), ("Szczecin"))}
        </List>
    </Box>
}
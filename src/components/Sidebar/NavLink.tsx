import {
  Icon,
  Link as ChaKraLink,
  Text,
  LinkProps as ChaKraLinkProps,
} from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChaKraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChaKraLink display={'flex'} align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChaKraLink>
    </ActiveLink>
  );
}

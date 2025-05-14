import Link from 'next/link';

// Define LinkComponent for navigation
const LinkComponent = ({ href, children, passHref, ...props }) => {
    return (
        <Link href={href} passHref={passHref} {...props}>
            {children}
        </Link>
    );
};

export default LinkComponent;

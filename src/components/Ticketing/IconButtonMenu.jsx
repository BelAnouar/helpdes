import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const IconButtonMenu = ({ icon: Icon, color, buttonText, menuItemText, assignerMutation }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (item) => {
        assignerMutation.mutate({ id: item.id });
        handleClose();
    };
    console.log(menuItemText)
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Icon className={color} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {!Array.isArray(menuItemText)  ? (
                    <MenuItem onClick={() => handleMenuItemClick(menuItemText)}>{buttonText}</MenuItem>
                ) : (
                    menuItemText.map(item => (
                        <MenuItem key={item.id} onClick={() => handleMenuItemClick(item)}>
                            {item.name}
                        </MenuItem>
                    ))
                )}
            </Menu>
        </div>
    );
};

export default IconButtonMenu;

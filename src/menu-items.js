const menuItems = {
  items: [
    
    {
      id: 'LMS',
      title: 'LMS',
      type: 'group',
      icon: 'icon-support',
      children: [
        {
          id: 'courses',
          title: 'Courses',
          type: 'item',
          url: '/courses',
          classes: 'nav-item',
          icon: 'feather icon-sidebar'
        },
      ]
    }
  ]
};

export default menuItems;

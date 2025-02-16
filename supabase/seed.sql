INSERT INTO public.marathons (name, thumbnail_url, promoter, starting_date, ending_date, price, tracks, description)
VALUES
(
    'Berlin City Marathon',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'EuroMarathon Events',
    '2024-09-15',
    '2024-09-15',
    89.99,
    ARRAY['10K','Half Marathon','Marathon'],
    'Experience Berlin"s iconic landmarks through this fast, flat course with incredible crowd support. Perfect for both elite runners and first-timers.'
),
(
    'Rock ''n'' Roll Marathon Series',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Rock Running Inc.',
    '2024-11-03',
    '2024-11-03',
    120.50,
    ARRAY['5K','10K','Half Marathon'],
    'Live bands every mile, energetic cheer squads, and a finish line festival. The world"s largest running series with a party atmosphere!'
),
(
    'Tokyo Spring Marathon',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Asia Runs Co.',
    '2025-04-06',
    '2025-04-06',
    75.00,
    ARRAY['Marathon'],
    'Run beneath cherry blossoms in this meticulously organized marathon. Experience Japanese culture and precision event management at its finest.'
),
(
    'Chicago Lakefront Marathon',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'Windy City Marathons',
    '2024-10-13',
    '2024-10-13',
    0.00,
    ARRAY['5K','10K'],
    'Free community event along Lake Michigan. Enjoy stunning lake views and Chicago"s skyline in this family-friendly running festival.'
),
(
    'London Royal Marathon',
    'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'UK Marathon Group',
    '2024-07-28',
    '2024-07-28',
    150.99,
    ARRAY['10K','Half Marathon'],
    'Pass royal palaces and historic landmarks in this premium event. Features luxury amenities and royal charity partnerships.'
);
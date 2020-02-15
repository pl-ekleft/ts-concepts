// Emun - вспомогательная сущность, которая помогает структурировать код с однотипными элементами

enum Membership {
    Simple, // 0
    Standard, // 1
    Premium // 2
}

const membership = Membership.Standard
const membershipReverse = Membership[2] // Premium

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'vk',
    FB = 'facebook',
    INST = 'instagram',
}

const social = SocialMedia.INST
console.log(social);

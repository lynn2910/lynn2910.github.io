import {gsap} from "gsap";

export function animate(node, {type, ...args}) {
    let method = gsap[type];
    return method(node, args);
}

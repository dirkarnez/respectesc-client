declare module "*.svg" {
  const content: any;
  export = content;
}

declare module "*.png" {
  const content: any;
  export = content;
}

declare module "*.jpg" {
  const content: any;
  export = content;
}

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "aos" {
  export function init({
    once: boolean,
    duration: number
  });
}
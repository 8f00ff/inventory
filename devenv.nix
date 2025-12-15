{ pkgs, lib, config, ... }: {
  languages = {
    javascript.enable = true;
    typescript.enable = true;
  };
  
  packages = with pkgs; [
    nodejs
  ];
  
  processes.dev.exec = "npm run dev";
}

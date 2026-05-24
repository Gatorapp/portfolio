import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';

export const Icon = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  external: ExternalLink,
  code: Code2,
  arrow: ArrowRight,
  download: Download,
  pin: MapPin,
  sparkles: Sparkles
};

export type IconName = keyof typeof Icon;

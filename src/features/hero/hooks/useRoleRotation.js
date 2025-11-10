// src/features/hero/hooks/useRoleRotation.js
import { useState, useEffect } from 'react';

export const useRoleRotation = (roles, interval) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [roles.length, interval]);

  return {
    currentRole: roles[currentRoleIndex],
    currentRoleIndex
  };
};
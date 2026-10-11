import { getStorageItem, setStorageItem } from "@/utils/storage";
import { UserProgress } from "@/utils/eligibility";

const PROGRESS_STORAGE_KEY = "techmiya_git_github_progress_v1";

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  completedLabs: [],
  mode: "beginner",
  lastActiveLessonId: "lesson-01",
};

export const progressService = {
  getProgress(): UserProgress {
    return getStorageItem<UserProgress>(PROGRESS_STORAGE_KEY, DEFAULT_PROGRESS);
  },

  isLessonCompleted(lessonId: string): boolean {
    const p = this.getProgress();
    return p.completedLessons.includes(lessonId);
  },

  markLessonComplete(lessonId: string): UserProgress {
    const p = this.getProgress();
    if (!p.completedLessons.includes(lessonId)) {
      const updated: UserProgress = {
        ...p,
        completedLessons: [...p.completedLessons, lessonId],
        lastActiveLessonId: lessonId,
      };
      setStorageItem(PROGRESS_STORAGE_KEY, updated);
      return updated;
    }
    return p;
  },

  toggleLesson(lessonId: string): UserProgress {
    const p = this.getProgress();
    const exists = p.completedLessons.includes(lessonId);
    const updated: UserProgress = {
      ...p,
      completedLessons: exists
        ? p.completedLessons.filter((id) => id !== lessonId)
        : [...p.completedLessons, lessonId],
      lastActiveLessonId: lessonId,
    };
    setStorageItem(PROGRESS_STORAGE_KEY, updated);
    return updated;
  },

  isLabCompleted(labId: string): boolean {
    const p = this.getProgress();
    return p.completedLabs.includes(labId);
  },

  markLabComplete(labId: string): UserProgress {
    const p = this.getProgress();
    if (!p.completedLabs.includes(labId)) {
      const updated: UserProgress = {
        ...p,
        completedLabs: [...p.completedLabs, labId],
      };
      setStorageItem(PROGRESS_STORAGE_KEY, updated);
      return updated;
    }
    return p;
  },

  toggleLab(labId: string): UserProgress {
    const p = this.getProgress();
    const exists = p.completedLabs.includes(labId);
    const updated: UserProgress = {
      ...p,
      completedLabs: exists
        ? p.completedLabs.filter((id) => id !== labId)
        : [...p.completedLabs, labId],
    };
    setStorageItem(PROGRESS_STORAGE_KEY, updated);
    return updated;
  },

  setMode(mode: "beginner" | "advanced"): UserProgress {
    const p = this.getProgress();
    const updated: UserProgress = { ...p, mode };
    setStorageItem(PROGRESS_STORAGE_KEY, updated);
    return updated;
  },

  setLastActive(lessonId: string): void {
    const p = this.getProgress();
    setStorageItem(PROGRESS_STORAGE_KEY, { ...p, lastActiveLessonId: lessonId });
  },

  resetProgress(): void {
    setStorageItem(PROGRESS_STORAGE_KEY, DEFAULT_PROGRESS);
  },

  markAllComplete(lessonIds: string[], labIds: string[]): UserProgress {
    const p = this.getProgress();
    const updated: UserProgress = {
      ...p,
      completedLessons: [...new Set([...p.completedLessons, ...lessonIds])],
      completedLabs: [...new Set([...p.completedLabs, ...labIds])],
    };
    setStorageItem(PROGRESS_STORAGE_KEY, updated);
    return updated;
  }
};

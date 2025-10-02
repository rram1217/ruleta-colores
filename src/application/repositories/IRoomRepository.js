// application/repositories/IRoomRepository.ts
import { Room, HistoryEntry } from "@/domain/models/Room";

export interface IRoomRepository {
    watch(roomId: string, cb: (room: Room | null) => void): () => void;
    create(initial: Partial<Room>): Promise<{ roomId: string; code: string }>;
    ensureCode(roomId: string): Promise<string>;
    resolveRoomIdByCode(code: string): Promise<string | null>;

    addColor(roomId: string, color: string): Promise<void>;
    removeColor(roomId: string, color: string): Promise<void>;
    updateCustomColor(roomId: string, color: string, hex: string): Promise<void>;

    pushHistory(roomId: string, entry: HistoryEntry): Promise<void>;
    removeColorIfNotLast(roomId: string, color: string): Promise<void>;
    reset(roomId: string): Promise<void>;
}
